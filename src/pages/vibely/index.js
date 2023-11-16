import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [os, setOS] = useState("ios");

  return (
    <div className="vibely flex flex-col items-center">
      <section className="text-center">
        <h1 className="uppercase text-4xl font-black m-0">Vibely</h1>
        <h4 className="lowercase text-base font-light m-0">
          Music visualization made easy
        </h4>
      </section>
      <section className="links flex gap-2 items-center">
        <Link
          className={`${
            os === "ios"
              ? "text-slate-900 dark:text-slate-100"
              : "text-slate-400"
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOS("ios");
          }}
        >
          iOS
        </Link>
        <Link
          className={`${
            os === "android"
              ? "text-slate-900 dark:text-slate-100"
              : "text-slate-400"
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOS("android");
          }}
        >
          Android
        </Link>
      </section>
      <section>
        {os === "ios" && (
          <video
            muted
            loop
            autoPlay
            poster="/promo-placeholder-ios.png"
            style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
          >
            <source src="/promo-video-ios.webm" type="video/webm" />
          </video>
        )}
        {os === "android" && (
          <video
            muted
            loop
            autoPlay
            poster="/promo-placeholder-android.png"
            style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
          >
            <source src="/promo-video-android.webm" type="video/webm" />
          </video>
        )}
      </section>
      <section className="text-center">
        <h2 className="rainbow">Download</h2>
        <div className="app-badges flex items-center" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ios"
              src="/app-badge-ios.png"
              alt="iOS"
              width={140}
              height={50}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=co.chksndapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="android"
              src="/app-badge-android.png"
              alt="Android"
              width={180}
              height={50}
            />
          </a>
        </div>
      </section>
      <section className="social">
        <a
          href="https://instagram.com/vibely.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-xl" />
        </a>
        <a
          href="https://tiktok.com/@vibely.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok fa-xl" />
        </a>
        <a
          href="https://github.com/chksnd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-xl" />
        </a>
      </section>
      <section className="links flex gap-2 items-center">
        <Link href="/vibely/privacy">Privacy</Link>
        <Link href="/vibely/terms">Terms</Link>
        <Link href="/vibely/cookies">Cookies</Link>
        <Link href="/vibely/open-source">Libraries</Link>
      </section>
    </div>
  );
}
