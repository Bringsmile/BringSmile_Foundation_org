import connectDB from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImages";
import campaign from "@/models/campaignModels";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database.");

    const formData = await req.formData();
    console.log("Form data received.");

    const title = formData.get("title");
    const description = formData.get("description");
    const goal = formData.get("goal");
    const image = formData.get("image");

    console.log("Parsed form data:", { title, description, goal });

    if (!title || !description || !goal || !image) {
      console.error("Missing required fields.");
      return NextResponse.json({ msg: "Please provide all the required fields." }, { status: 400 });
    }

    const imageUploadResult = await uploadImage(image, "campaignImages"); // Assuming image is uploaded in 'campaignImages' folder
    console.log("Image upload result:", imageUploadResult);

    if (!imageUploadResult.secure_url) {
      console.error("Image upload failed.");
      return NextResponse.json({ msg: "Image upload failed." }, { status: 500 });
    }

    const imageUrl = imageUploadResult.secure_url;
    console.log("Image URL:", imageUrl);

    const campaignData = {
      title,
      description,
      goal,
      image: imageUrl,
    };

    console.log("Campaign data to be saved:", campaignData);

    await campaign.create(campaignData); 
    console.log("Campaign added successfully.");
    return NextResponse.json({ msg: "Campaign added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error adding campaign:", error);
    return NextResponse.json({ msg: "Error adding campaign", error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database.");

    const campaigns = await campaign.find(); // Assuming you're fetching campaigns from the database
    console.log("Fetched campaigns:");
    return NextResponse.json(campaigns, { status: 200 });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return NextResponse.json({ msg: "Error fetching campaigns", error: error.message }, { status: 500 });
  }
};