import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout for a particular chat room with a specific chatID
      {children}
    </div>
  );
}
