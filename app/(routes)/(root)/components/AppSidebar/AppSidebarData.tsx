import {
    Home,
    BookOpen,
    Settings2,
    SquareTerminal,
    GraduationCap,
    AreaChart,
} from "lucide-react";

export const routes = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Cursos",
        url: "/courses",
        icon: SquareTerminal,
    },
    {
        title: "Meus Cursos",
        url: "/my-courses",
        icon: BookOpen,
    },
    {
        title: "Ajustes",
        url: "/settings",
        icon: Settings2,
    },
];

export const routesTeacher = [
    {
        title: "Cursos",
        url: "/teacher",
        icon: GraduationCap,
    },
    {
        title: "Analytics",
        url: "/teacher/analytics",
        icon: AreaChart,
    },
];
  