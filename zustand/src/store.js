import { create } from "zustand";
const useMystore = create(()=>{
    return{
        count : 1,
        name  :"Ziya",
    }
})
export default useMystore;