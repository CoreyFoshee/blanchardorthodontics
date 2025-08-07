'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      {/* WebFont Loader */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="beforeInteractive"
      />
      <Script id="webfont-config" strategy="beforeInteractive">
        {`
          WebFont.load({
            google: {
              families: ["PT Sans:400,400italic,700,700italic","DM Sans:regular,500,700","Poppins:regular,500,600,700,800"]
            }
          });
        `}
      </Script>

      {/* Webflow Touch Detection */}
      <Script id="webflow-touch" strategy="beforeInteractive">
        {`
          !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VZ37QDRHNB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'developer_id.dZGVlNj', true);
          gtag('config', 'G-VZ37QDRHNB');
        `}
      </Script>

      {/* Google reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        async
        defer
      />

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '343877441698118');fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
