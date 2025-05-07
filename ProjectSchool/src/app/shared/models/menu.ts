import { MenuItem } from "./menuItem";

export const menuItems: MenuItem[] = [
  {
    link: '/dash',
    icon: 'fa-chart-line',
    label: 'Dashboard',
  },
  {
    link: '/course',
    icon: 'fa-graduation-cap',
    label: 'Cursos',
  },
  {
    link: '/teacher',
    icon: 'fa-person-chalkboard',
    label: 'Professores',
  },
  {
    link: '/student',
    icon: 'fa-chalkboard-user',
    label: 'Alunos',
  },
  {
    link: '/support',
    icon: 'fa-headset',
    label: 'Suporte',
  }
]