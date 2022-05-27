// eslint-disable-next-line no-use-before-define
import React from 'react'
import { createRoot } from "react-dom/client"
import { HeroesApp } from "./HeroesApp"


const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<HeroesApp/>);


