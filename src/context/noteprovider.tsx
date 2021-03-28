import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  children: any;
}

const NoteContext = createContext();

const NoteProvider = ({children}:Props) => {
  const [notes, setNotes] = useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem("notes");
    if (result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes, findNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;