import { ReactNode, createContext, useContext, useState } from 'react';

export const snapPoints = ['92px', '420px'];

interface DrawerContextType {
  activeSnap: number | string | null;
  setActiveSnap: (snap: number | string | null) => void;
  toggleHomeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [activeSnap, setActiveSnap] = useState<number | string | null>(
    snapPoints[1],
  );

  const toggleHomeDrawer = () => {
    setActiveSnap((prev) =>
      prev === snapPoints[0] ? snapPoints[1] : snapPoints[0],
    );
  };

  return (
    <DrawerContext.Provider
      value={{ activeSnap, setActiveSnap, toggleHomeDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      'useDrawer는 반드시 DrawerProvider 내에서 사용되어야 합니다.',
    );
  }
  return context;
}
