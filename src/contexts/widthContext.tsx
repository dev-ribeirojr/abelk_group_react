import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type ProviderProp = {
  valueMenu: boolean;
  preview: number;
  setValueMenu: Dispatch<SetStateAction<boolean>>;
};

export const WidthContext = createContext({} as ProviderProp);

export default function WidthProvider({ children }: { children: ReactNode }) {
  const [valueMenu, setValueMenu] = useState<boolean>(false);
  const [preview, setPreview] = useState<number>(3);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 1024) {
      setPreview(2);
    }
  }, []);

  document.body.onresize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setValueMenu(false);
    }
    if (width <= 1024) {
      setPreview(2);
    } else {
      setPreview(3);
    }
  };

  return (
    <WidthContext.Provider
      value={{
        preview,
        valueMenu,
        setValueMenu,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
}
