// Pixel-perfect migration of appointments.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

export default function AppointmentsPage() {
  return (
    <>
      <div className="html-embed w-embed w-iframe">
        <iframe 
          src="https://appointments.greyfinch.com/?division=339905" 
          style={{height: '100%', width: '100vw', border: 0, display: 'block', margin: 'auto'}} 
          allow="geolocation"
        />
      </div>
    </>
  )
} 