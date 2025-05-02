const TAGS = [
  { label: "perfect for conversations", icon: "🗣️" },
  { label: "amazing shakes", icon: "🥤" },
  { label: "instaworthy food", icon: "📷" },
  { label: "live music", icon: "🎸" },
  { label: "brunch", icon: "🍳" },
  { label: "chilled beer", icon: "🍺" },
];

export default function RightSide() {
  return (
    <div className="flex items-center justify-center bg-indigo-900 px-10 py-14 ">
      <div>
        <p className="mb-6 text-center text-s font-semibold tracking-[0.3em]">
          KNOWN FOR
        </p>

        <ul className="flex flex-wrap gap-4">
          {TAGS.map(({ label, icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm backdrop-blur"
            >
              <span className="text-lg">{icon}</span>
              <span className="whitespace-nowrap">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /* right ­— tag list */
}
