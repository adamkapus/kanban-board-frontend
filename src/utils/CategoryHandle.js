export const CATEGORIES_MAP = {
    Függőben : task => task.category==="Függőben",
    Folyamatban : task => task.category==="Folyamatban",
    Kész : task => task.category==="Kész",
    Elhalasztva : task => task.category==="Elhalasztva"
}

export const CATEGORIES = Object.keys(CATEGORIES_MAP);