import type { FeaturedProject, ListedProject } from "../types";

/**
 * Screenshots expected in /public:
 *   /websites/<name>.png — card image
 *   /websites/<name>.gif — hover demo (optional)
 */
export const FEATURED: FeaturedProject[] = [
  {
    name: "loplo/",
    tag: "private",
    flags: "--nextjs --tailwind --firebase --yt-api",
    shot: "/websites/loplo.png",
    gif: "/demo-loplo.gif",
    live: "https://loplo.com",
    liveLabel: "loplo.com ↗",
  },
  {
    name: "mersch-schmitz/",
    tag: "private",
    flags: "--java --spring-boot --spring-security --aws-s3 --mysql --tailwind",
    shot: "/websites/mersch.png",
    gif: "/mersch-demo.gif",
  },
  {
    name: "autoscout24-clone/",
    flags: "--nextjs --typescript --django-rest --tailwind",
    shot: "/websites/autoscout24.png",
    gif: "/demo-autoscout24.gif",
    github: "https://github.com/vujic02/autoscout24-clone",
  },
];

export const LISTED: ListedProject[] = [
  {
    name: "hbo-go-clone/",
    stack: "react · styled-components · tmdb",
    github: "https://github.com/vujic02/HBO-GO-clone",
    live: "https://hbo-go-clone.web.app",
  },
  {
    name: "google-keep-clone/",
    stack: "react · firebase · css",
    github: "https://github.com/vujic02/google-keep-clone",
    live: "https://keep-notes-f3306.web.app",
  },
  {
    name: "ui-web-page/",
    stack: "react · styled-components",
    github: "https://github.com/vujic02/UI-Web-Page",
    live: "https://react-ui-webpage.web.app",
  },
];
