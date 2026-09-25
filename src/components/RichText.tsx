import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

export function RichText({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={{
    block: { h1: ({ children }) => <h2>{children}</h2> },
    marks: {
      link: ({ value: mark, children }) => {
        const href = typeof mark?.href === 'string' ? mark.href : '';
        return /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(href)
          ? <a href={href}>{children}</a> : <>{children}</>;
      },
    },
  }} />;
}
