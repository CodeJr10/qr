// app/dashboard/events/[eventId]/qr/[userId]/page.jsx

import Image from "next/image";
import QRGenerator from "../../../../../../components/QRCode/QRGenerator"; // Adjust the path as necessary

const QRPage = async ({ params }) => {
  // Await params to get userId and eventId
  const { userId, eventId } = await params;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400 text-black">
      <h1 className="text-4xl font-bold mb-6 text-white">QR Code Generator</h1>
      <p className="text-lg mb-4 text-white">
        Scan the QR code below to access your event details.
      </p>

      {/* Display logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png" // Path to your logo file in the public directory
          alt="Logo"
          width={150} // Adjust the width as needed
          height={150} // Adjust the height as needed
          className="rounded-lg" // Optional styling for the logo
        />
      </div>

      {/* Display the QR code */}
      <QRGenerator userId={userId} eventId={eventId} className="text-black" />
    </div>
  );
};

export default QRPage;
