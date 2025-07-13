const mongoose=require("mongoose");
const initData=require("/home/vijay/Desktop/Majorp/init/data.js");
const Listing=require("/home/vijay/Desktop/Majorp/models/listing.js");


const MONGO_URL="mongodb://127.0.0.1:27017/wonderlust";
main()
   .then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});


async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB= async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner: "683006da479a5b6d8ed21636"}));
    await Listing.insertMany(initData.data);
    console.log("data was init");
};

initDB();
