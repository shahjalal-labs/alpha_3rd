import { siteConfig } from "@/config/siteConfig";

export default function QualificationBlock() {
  const { qualifications } = siteConfig;

  return (
    <div className="space-y-6 text-gray-800">
      <div>
        <h3 className="text-xl font-bold text-black mb-4">
          {qualifications.heading1}
        </h3>
        <div className="space-y-4">
          {qualifications.items1.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-semibold text-black">{item.title}</p>
              {item.fullText && (
                <p className="text-sm text-gray-600">{item.fullText}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-xl font-bold text-black mb-4">
          {qualifications.heading2}
        </h3>
        {qualifications.items2.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <p className="font-semibold text-black">{item.title}</p>
            {item.details && (
              <p className="text-sm text-gray-600">{item.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
