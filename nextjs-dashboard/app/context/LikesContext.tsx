"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { interestsReducer } from './LikesReducer';

export interface Interest {
  id: number;
  name: string;
}

interface LikesContextType {
  interests: Interest[];
  addInterest: (interest: Omit<Interest, "id">) => void;
  modifyInterest: (interest: Interest) => void;
  deleteInterest: (id: number) => void;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

interface LikesProviderProps {
  children: ReactNode;
}

export function LikesProvider({ children }: LikesProviderProps) {
  const initialState: { interests: Interest[]; nextId: number } = { interests: [{name:"Programar",id:1},{name:"Jugar al futbol",id:2} , {name:"Hacer teatro", id:3} ], nextId: 4 };

  const [state, dispatch] = useReducer(interestsReducer, initialState);

  const addInterest = (interest: Omit<Interest, "id">) => {
    dispatch({ type: "addInterest", interest });
  };

  const modifyInterest = (interest: Interest) => {
    dispatch({ type: "modifyInterest", interest });
  };

  const deleteInterest = (id: number) => {
    dispatch({ type: "deleteInterest", id });
  };

  return (
    <LikesContext.Provider value={{ ...state, addInterest, modifyInterest, deleteInterest }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
}
