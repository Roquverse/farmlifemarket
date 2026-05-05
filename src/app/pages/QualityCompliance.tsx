import { CheckCircle2, Award, FileCheck, Microscope, Droplets, Wind } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router";

const SERIF = "'Playfair Display', Georgia, serif";

const heroImage =
  "/quality.png";

const certifications = [
  {
    name: "USDA Organic",
    body: "U.S. Department of Agriculture",
    region: "United States",
    desc: "All farm partners must meet USDA's rigorous organic production requirements, including prohibited substances lists and record-keeping mandates.",
  },
  {
    name: "EU Organic",
    body: "European Commission",
    region: "European Union",
    desc: "Products exported to EU markets comply with Regulation (EU) 2018/848, ensuring equivalence with European organic standards.",
  },
  {
    name: "GlobalG.A.P.",
    body: "Global Partnership",
    region: "Worldwide",
    desc: "Our producers maintain GlobalG.A.P. certification, confirming good agricultural practices for food safety, labor conditions, and environmental care.",
  },
  {
    name: "Rainforest Alliance",
    body: "Rainforest Alliance",
    region: "Global",
    desc: "Eligible farms carry Rainforest Alliance certification, demonstrating commitments to biodiversity conservation and sustainable livelihoods.",
  },
  {
    name: "Fair Trade",
    body: "Fairtrade International",
    region: "Global",
    desc: "Fair Trade certified producers receive guaranteed minimum prices and premiums that fund community development projects.",
  },
  {
    name: "ISO 22000",
    body: "International Organization for Standardization",
    region: "Global",
    desc: "Our food safety management systems are audited against ISO 22000, ensuring hazard controls across the entire food chain.",
  },
];

const pillars = [
  {
    icon: Microscope,
    title: "Soil Health",
    checks: ["No synthetic pesticides or herbicides", "Regular soil microbiome testing", "Cover cropping & crop rotation required", "Composting and natural amendments only"],
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    checks: ["Watershed impact assessments", "Drip irrigation efficiency standards", "Runoff monitoring and reporting", "Greywater recycling encouraged"],
  },
  {
    icon: Wind,
    title: "Carbon & Climate",
    checks: ["Annual carbon footprint audits", "Renewable energy use tracked", "Agroforestry integration scored", "Transport emissions offset program"],
  },
  {
    icon: FileCheck,
    title: "Traceability",
    checks: ["Blockchain-verified supply chain", "Batch-level product tracking", "Full audit trail accessible to buyers", "QR code transparency labels"],
  },
];

const auditProcess = [
  { step: "1", title: "Application & Self-Assessment", desc: "Farms complete a detailed self-assessment covering practices, inputs, and land history." },
  { step: "2", title: "Document Review", desc: "Our standards team reviews all records, soil tests, input logs, and prior certifications." },
  { step: "3", title: "On-Site Inspection", desc: "A certified third-party auditor conducts a physical inspection of the farm and facilities." },
  { step: "4", title: "Certification Decision", desc: "Results are reviewed by our Standards Committee. Farms receive approval, conditional status, or rejection with remediation guidance." },
  { step: "5", title: "Annual Renewal", desc: "All certifications are renewed annually with continuous monitoring between audit cycles." },
];

export function QualityCompliancePage() {
  return (
    <div>
      <PageHero
        badge="Quality & Compliance"
        title="Trust Built Through Verified"
        titleHighlight="Standards"
        description="Quality assurance, traceability, and compliance protocols designed to support credible agricultural trade."
        image={heroImage}
        breadcrumb={[{ label: "Quality & Compliance" }]}
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Approach"
            title="A multi-layered framework"
            titleHighlight="for authentic organic integrity"
            description=""
          />
          <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
            <div className="space-y-6">
              <p className="text-gray-600" style={{ lineHeight: 1.8 }}>
                In an industry rife with greenwashing, we believe that trust is earned through transparency. Our standards framework combines internationally recognized certifications with our own proprietary auditing layer — ensuring that every Farm Life Market listing is genuinely what it claims to be.
              </p>
              <p className="text-gray-600" style={{ lineHeight: 1.8 }}>
                Farms that cannot meet our baseline requirements are not listed on our platform. Those that exceed them are highlighted with our "Farmlife Verified" badge — the highest mark of quality we award.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Third-Party Audit Protocols" },
                { label: "Supplier Verification Controls" },
                { label: "Rapid Review Processes" },
                { label: "Fraud Prevention Standards" },
              ].map((s, i) => (
                <div key={i} className="bg-[#fafafa] border border-gray-100 rounded-2xl p-6 text-center flex flex-col justify-center min-h-[160px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all">
                  <div className="text-gray-600 text-sm font-medium" style={{ lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Certifications"
            title="Standards and Certifications"
            titleHighlight="Supported"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[#1a2e1a] font-semibold text-lg">{cert.name}</div>
                    <div className="text-[#2d5016] text-xs mt-0.5 font-semibold">{cert.region}</div>
                  </div>
                  <div className="w-10 h-10 bg-[#edf4e4] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2d5016] transition-colors">
                    <Award size={18} className="text-[#2d5016] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="text-gray-400 text-xs mb-3 font-medium uppercase tracking-wide">{cert.body}</div>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Framework"
            title="The four pillars of"
            titleHighlight="Farmlife Standards"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {pillars.map((p) => (
              <div key={p.title} className="group bg-[#fafafa] border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all">
                <div className="w-12 h-12 bg-[#edf4e4] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2d5016] transition-colors">
                  <p.icon size={22} className="text-[#2d5016] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#1a2e1a] mb-4 font-semibold">{p.title}</h3>
                <ul className="space-y-3">
                  {p.checks.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <CheckCircle2 size={16} className="text-[#2d5016] mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-24 bg-[#1a2e1a]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            badge="Audit Process"
            title="How we verify"
            titleHighlight="every partner farm"
            dark
          />
          <div className="space-y-6">
            {auditProcess.map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#E8B835] flex items-center justify-center shrink-0">
                  <span className="text-[#1a1a1a] text-sm" style={{ fontWeight: 700 }}>{step.step}</span>
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>{step.title}</h3>
                  <p className="text-white/60 text-sm" style={{ lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Apply for Certification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
