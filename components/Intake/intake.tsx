"use client";

import { montserrat } from "@/app/fonts";

const inputClass = `${montserrat.className} w-full bg-white/5 border border-white/80 text-white placeholder-white/90 px-4 py-3 rounded-lg focus:outline-none focus:border-threepts-green transition-colors`;
const labelClass = `${montserrat.className} block text-sm uppercase tracking-widest text-white/90 mb-2`;

export default function Intake() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center w-full min-h-screen bg-black/85 px-6 py-20">
      <div className="w-full max-w-2xl">
        <h2 className={`${montserrat.className} text-4xl uppercase font-bold text-white mb-2`}>
          Let&apos;s Talk
        </h2>
        <p className={`${montserrat.className} text-white/80 mb-12`}>
          Fill out the form and I&apos;ll be in touch shortly.
        </p>

        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name</label>
              <input type="text" placeholder="Jane" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input type="text" placeholder="Smith" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder="jane@example.com" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>How Can I Help</label>
            <select defaultValue="" className={`${inputClass} appearance-none`}>
              <option value="" disabled className="bg-black">Select a service…</option>
              <option value="strategy" className="bg-black">Strategy</option>
              <option value="media-relations" className="bg-black">Media Relations</option>
              <option value="content" className="bg-black">Content Creation</option>
              <option value="social-media" className="bg-black">Social Media</option>
              <option value="capital-markets" className="bg-black">Capital Markets</option>
              <option value="other" className="bg-black">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>City</label>
            <input type="text" placeholder="New York" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Comments <span className="normal-case tracking-normal text-white/30">(optional)</span></label>
            <textarea
              rows={5}
              placeholder="Anything else you'd like to share…"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className={`${montserrat.className} uppercase tracking-widest text-sm font-bold bg-threepts-green text-black px-8 py-4 rounded-lg hover:bg-white transition-colors mt-2`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
