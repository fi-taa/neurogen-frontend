import axios from "axios";


export const MedicalChat = async (data) => {
    //question
  const useData = await axios.post("https://neuronet.onrender.com/api/v1/medical/medicalchat", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(useData);
 return useData
};


export const getMedicalchathistory = async (data) => {
    //
  const response = await axios.get(`https://neuronet.onrender.com/api/v1/medical/medical-chat/${data}`);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};