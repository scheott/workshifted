import { linkedinScripts } from '../data/premiumContent/linkedinScripts';
import { bossProposals } from '../data/premiumContent/bossProposals';

const TemplateLibrary = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('linkedin');
  const [copiedTemplate, setCopiedTemplate] = useState(null);

  useEffect(() => {
    if (!user?.is_premium) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const copyToClipboard = (text, templateId) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateId);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const tabs = [
    { id: 'linkedin', label: 'LinkedIn Templates', icon: '💼' },
    { id: 'boss', label: 'Boss Proposals', icon: '📋' },
    { id: 'emails', label: 'Email Templates', icon: '✉️' }
  ];

  const renderLinkedInTemplates = () => (
    <div className="space-y-8">
      {linkedinScripts.categories.map((category) => (
        <div key={category.name} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
          </div>
          <div className="p-6">
            <div className="grid gap-6">
              {category.templates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{template.title}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(template.template, template.id)}
                      className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium"
                    >
                      {copiedTemplate === template.id ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{template.template}</pre>
                  </div>
                  {template.tips && (
                    <div className="mt-3 p-3 bg-amber-50 rounded-md">
                      <h5 className="text-sm font-medium text-amber-800 mb-1">💡 Pro Tips:</h5>
                      <ul className="text-sm text-amber-700 list-disc list-inside space-y-1">
                        {template.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBossProposals = () => (
    <div className="space-y-8">
      {bossProposals.categories.map((category) => (
        <div key={category.name} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
          </div>
          <div className="p-6">
            <div className="grid gap-6">
              {category.templates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{template.title}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                      {template.situation && (
                        <p className="text-xs text-blue-600 mt-1">Best for: {template.situation}</p>
                      )}
                    </div>
                    <button
                      onClick={() => copyToClipboard(template.template, template.id)}
                      className="px-3 py-1.5 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-sm font-medium"
                    >
                      {copiedTemplate === template.id ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{template.template}</pre>
                  </div>
                  {template.keyPoints && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-md">
                      <h5 className="text-sm font-medium text-blue-800 mb-1">🎯 Key Points to Customize:</h5>
                      <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                        {template.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEmailTemplates = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
      <div className="text-gray-400 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Email Templates Coming Soon</h3>
      <p className="text-gray-600">We're adding more email templates for AI initiatives, follow-ups, and project proposals.</p>
    </div>
  );

  if (!user?.is_premium) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Template Library</h1>
          <p className="text-gray-600">Copy-paste templates for LinkedIn optimization and boss proposals</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'linkedin' && renderLinkedInTemplates()}
          {activeTab === 'boss' && renderBossProposals()}
          {activeTab === 'emails' && renderEmailTemplates()}
        </div>
      </div>
    </div>
  );
};

export default TemplateLibrary;