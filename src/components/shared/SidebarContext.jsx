import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const openMobileSidebar = useCallback(() => setIsMobileSidebarOpen(true), []);
  const closeMobileSidebar = useCallback(() => setIsMobileSidebarOpen(false), []);
  const toggleMobileSidebar = useCallback(
    () => setIsMobileSidebarOpen((prev) => !prev),
    [],
  );

  const value = useMemo(
    () => ({
      isMobileSidebarOpen,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMobileSidebar,
    }),
    [
      isMobileSidebarOpen,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMobileSidebar,
    ],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  // If someone uses Header/Sidebar outside Layout, don't crash.
  if (!context) {
    return {
      isMobileSidebarOpen: false,
      openMobileSidebar: () => {},
      closeMobileSidebar: () => {},
      toggleMobileSidebar: () => {},
    };
  }

  return context;
};
