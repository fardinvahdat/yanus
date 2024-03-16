import { defineStore } from "pinia";
export const usePosts = defineStore("postStore", () => {
  const posts = ref([
    {
      id: 1,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: {
        name: "Jason Francisco",
        avatar: "/helpful-resources/avatar-1.png",
      },
      date: "August 20, 2022",
      image: "/helpful-resources/2.png",
    },
    {
      id: 2,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: {
        name: "Eric Smith",
        avatar: "/helpful-resources/avatar-2.png",
      },
      date: "August 20, 2022",
      image: "/events/2.webp",
    },
    {
      id: 3,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: {
        name: "Elizabeth Slavin",
        avatar: "/helpful-resources/avatar-3.png",
      },
      date: "August 30, 2022",
      image: "/events/3.jpg",
    },
    {
      id: 4,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: {
        name: "Tracey Wilson",
        avatar: "/helpful-resources/avatar-3.png",
      },
      date: "August 30, 2022",
      image: "/helpful-resources/1.png",
    },
  ]);
  return {
    posts,
  };
});
