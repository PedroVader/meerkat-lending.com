import { CreditCard } from "lucide-react";
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
        <CreditCard className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Driver's License</h3>
        <p className="text-gray-600">Used to verify your identity and prevent fraud</p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div>
          <Label htmlFor="driverLicense" className="text-base font-medium mb-2 block">License Number</Label>
          <Input
            id="driverLicense"
            type="text"
            placeholder="License Number"
            value={formData.driverLicense}
            onChange={(e) => handleInputChange('driverLicense', e.target.value)}
            className="text-base p-4"
          />
        </div>
        <div>
          <Label className="text-base font-medium mb-2 block">License State</Label>
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
        </div>
      </div>
    </div>
  );
}