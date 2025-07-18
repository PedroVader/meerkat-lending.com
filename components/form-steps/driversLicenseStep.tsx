import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DriversLicenseStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function DriversLicenseStep({ formData, handleInputChange }: DriversLicenseStepProps) {
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Driver's License</h3>
        <p className="text-gray-600">Used to verify your identity and prevent fraud</p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* License Number */}
        <div className="space-y-2">
          <Label htmlFor="driverLicense" className="text-base font-medium">
            License Number
          </Label>
          <Input
            id="driverLicense"
            type="text"
            placeholder="Enter your license number"
            value={formData.driverLicense}
            onChange={(e) => handleInputChange('driverLicense', e.target.value)}
            className="text-base p-4"
          />
          <p className="text-xs text-gray-500">
            As shown on your driver's license or state ID
          </p>
        </div>
        
        {/* License State */}
        <div className="space-y-2">
          <Label className="text-base font-medium">
            License State
          </Label>
          <Select value={formData.licenseState} onValueChange={(value) => handleInputChange('licenseState', value)}>
            <SelectTrigger className="text-base p-4">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state} className="text-base py-2">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">
            State that issued your license
          </p>
        </div>
      </div>
    </div>
  );
}