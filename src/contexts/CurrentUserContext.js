import React, {useEffect, useState} from "react";
import { useContext } from "react";
import Api from "../utils/api";

export const contexto = React.createContext();

export function useCards(){
  const context = useContext(contexto);
  if(!context){
    throw new Error("useCards must be used within a CurrentUserContext");
  }
  return context;
}
