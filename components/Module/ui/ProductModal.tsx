"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/Module/ui/dialog";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  shortLink: string;
};

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.04 15.58l-.37 4.72c.53 0 .76-.23 1.04-.5l2.5-2.42 5.18 3.8c.95.52 1.62.25 1.87-.88l3.4-15.88-19.45 7.8 4.72 1.47 10.95-6.9-7.64 7.2z" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.204-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.15.198 2.095 3.2 5.077 4.487.709.306 1.26.489 1.69.625.71.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.075-.123-.273-.198-.57-.347z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.086-.205-7.713-2.165-10.141-5.144-.424.725-.666 1.562-.666 2.457 0 1.694.86 3.189 2.168 4.067-.8-.026-1.555-.245-2.21-.616v.061c0 2.364 1.679 4.337 3.909 4.783-.409.111-.839.171-1.283.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.098 2.798.142v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.314h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
    </svg>
  );
}

export default function ProductModal({ open, onClose, shortLink }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-lg bg-white p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-center">
            لینک ارسال شد!
          </DialogTitle>
          <DialogDescription className="text-center mt-2 text-gray-600">
            این لینک با موفقیت ارسال شد به کاربر.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 bg-gray-100 rounded-md p-3 text-center select-all cursor-pointer text-blue-600 font-semibold break-all">
          {shortLink}
        </div>

        <div className="flex justify-center gap-8 mt-6">
          <a
            href={`https://telegram.me/share/url?url=${encodeURIComponent(
              shortLink
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Telegram"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <TelegramIcon className="w-8 h-8" />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shortLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            className="text-green-500 hover:text-green-700 transition"
          >
            <WhatsappIcon className="w-8 h-8" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              shortLink
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="text-sky-500 hover:text-sky-700 transition"
          >
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shortLink
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FacebookIcon className="w-8 h-8" />
          </a>
        </div>

        <DialogFooter className="mt-6 flex justify-center">
          <DialogClose asChild>
            <button className="bg text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              <X size={24} />
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
