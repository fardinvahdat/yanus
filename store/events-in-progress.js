import { defineStore } from "pinia";
export const useEventListInProgress = defineStore("inProgressEventStore", () => {
  const events = ref([
    {
      id: 1,
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra vitae neque vitae tempus. Vestibulum id elementum massa. Proin aliquet laoreet metus nec pharetra.",
      date: "24/04/2023",
      image: "/events/1.png",
      totalStep: 3,
      currentStep: 2,
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
      totalStep: 3,
      currentStep: 1,
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
      totalStep: 3,
      currentStep: 2,
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
