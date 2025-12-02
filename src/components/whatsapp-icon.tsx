'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

import dynamic from 'next/dynamic';
import Avatar from '../../public/icon.png';

const isDev = process.env.NODE_ENV === 'development';

export default function WhatsAppIcon() {
  return (
    <FloatingWhatsApp
      avatar={Avatar.src}
      accountName='Ascent Wealth'
      phoneNumber='917305953668'
      allowEsc={true}
      allowClickAway={true}
      notification={!isDev}
      statusMessage='Typically responds in a 1 hours'
      chatMessage='Hello! 👋 How can we assist you with your financial goals today?'
      notificationDelay={60}
      notificationSound={!isDev}
      notificationLoop={3}
      darkMode={true}
      onClick={() => {}}
      onLoopDone={() => {}}
      onNotification={() => {}}
      onClose={() => {}}
      onSubmit={() => {}}
    />
  );
}

export const LazyWhatsAppIcon = dynamic(
  () => import('@/components/whatsapp-icon'),
  {
    ssr: false,
  }
);
