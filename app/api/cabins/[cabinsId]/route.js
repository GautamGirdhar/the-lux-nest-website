import { getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all[
      (getCabin(cabinId), getBookedDatesByCabinId(cabinId))
    ];
    return Response.json({ cabin, bookingDates });
  } catch (error) {
    return Response.json({ message: "Cabin Not Found" });
  }
}

// export async function POST() {}
