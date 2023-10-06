import styles from "./form.module.css";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const schema = z.object({
  name: z.string().min(3, "Digite seu nome!"),
  email: z.string().email("Digite um email válido!"),
  message: z
    .string()
    .min(15, "A mensagem precisa ter no mínimo 15 caracteres!"),
});

type SenEmail = {
  name: string;
  email: string;
  message: string;
};

export function FormSendEmail() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<SenEmail>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<string>("");

  async function handleSenEmail({ name, email, message }: SenEmail) {
    setLoading(true);
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setMessageStatus("sucesso");
      reset();
    } catch (er) {
      setMessageStatus("error");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setMessageStatus("");
      }, 3000);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSenEmail)}>
      <div>
        <label>
          NOME
          <input
            type="text"
            placeholder="Nome Completo"
            {...register("name")}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </label>
        <label>
          EMAIL
          <input
            type="text"
            placeholder="email@exemplo.com"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>
      </div>
      <label>
        MENSAGEM
        <textarea placeholder="Digite uma mensagem!" {...register("message")} />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </label>

      <button disabled={loading} type="submit">
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {messageStatus === "sucesso" && (
        <p className={styles.statusMessage}>
          {" "}
          <AiFillCheckCircle size={25} color="#14A961" />
          <span>Mensagem enviada com sucesso!</span>
        </p>
      )}

      {messageStatus === "error" && (
        <div>
          <BiErrorCircle size={25} color="#FFF" />
          <p>Erro ao enviar mensagem!</p>
        </div>
      )}
    </form>
  );
}
