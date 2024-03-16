import { defineStore } from "pinia";
export const useEventList = defineStore("eventStore", () => {
  const events = ref([
    {
      id: 1,
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
      date: "24/04/2023",
      image: "/events/1.png",
      bookCount: "210K",
      progress: "21",
      milestones: [
        {
          title: "MileStone #1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "400K",
        },
        {
          title: "MileStone #2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "150K",
        },
        {
          title: "MileStone #3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "300K",
        },
      ],
    },
    {
      id: 2,
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
      date: "13/08/2022",
      image: "/events/2.webp",
      bookCount: "350K",
      progress: "35",
      milestones: [
        {
          title: "MileStone #1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "100K",
        },
        {
          title: "MileStone #2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "50K",
        },
        {
          title: "MileStone #3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "150K",
        },
      ],
    },
    {
      id: 3,
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
      date: "05/11/2021",
      image: "/events/3.jpg",
      bookCount: "800K",
      progress: "80",
      milestones: [
        {
          title: "MileStone #1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "200K",
        },
        {
          title: "MileStone #2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "350K",
        },
        {
          title: "MileStone #3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
          targetAmount: "350K",
        },
      ],
    },
  ]);
  return {
    events,
  };
});
