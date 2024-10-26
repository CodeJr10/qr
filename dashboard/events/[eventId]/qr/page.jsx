// app/dashboard/events/[eventId]/qr/page.jsx

import QRGenerator from "@/components/QRCode/QRGenerator.jsx";

const QRPage = ({ params }) => {
  // Hardcoded dummy data
  const userId = "dummy-user-123"; // Example user ID
  const eventId = params.eventId; // Get event ID from the URL

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
      <QRGenerator userId={userId} eventId={eventId} />
    </div>
  );
};

export default QRPage;
