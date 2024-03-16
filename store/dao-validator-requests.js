import { defineStore } from "pinia";
export const useDAOValidatorRequests = defineStore(
  "DAOValidatorRequests",
  () => {
    const requests = ref([
      {
        userName: "jennifer lawrence",
        avatar: "/dao-requests/avatar-1.jpg",
        successfull: 7,
        stakeAmount: 10,
        isLiked: false,
        isDisLiked: false,
      },
      {
        userName: "angelina jolie",
        avatar: "/dao-requests/avatar-2.jpg",
        successfull: 3,
        stakeAmount: 15,
        isLiked: false,
        isDisLiked: false,
      },
    ]);
    return {
      requests,
    };
  }
);
