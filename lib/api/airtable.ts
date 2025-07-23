// lib/api/airtable.ts

const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = 'appmwFMIFckGpGfbQ'; // Tu Base ID
const AIRTABLE_TABLE_NAME = 'Loan Applications'; // Nombre de tu tabla

export async function submitToAirtable(formData: any) {

  // Log del formData original
  console.log("📥 formData recibido:", formData)

  const airtableData = {
    fields: {
      'Loan Amount': typeof formData.loanAmount === 'string'
        ? formData.loanAmount.trim().replace(/^"+|"+$/g, '')
        : formData.loanAmount,
      'Loan Purpose': formData.loanPurpose,
      'Credit Score': formData.creditScore,
      'Email': formData.email,
      'Phone Number': formData.phone,
      'First Name': formData.firstName,
      'Last Name': formData.lastName,
      // FORMATEAR DATE OF BIRTH
      'Date of Birth': formData.dateOfBirth
        ? (formData.dateOfBirth instanceof Date 
            ? formData.dateOfBirth.toISOString().split('T')[0]
            : new Date(formData.dateOfBirth).toISOString().split('T')[0])
        : '',
      'Zip Code': formData.zipCode,
      'Address': formData.address,
      'Income Type': formData.incomeType,
      'Monthly Income': formData.monthlyIncome,
      'SSN': formData.ssn,
      'Home Owner': formData.homeOwner,
      'Driver License': formData.driverLicense,
      'License State': formData.licenseState,
      'Pay Frequency': formData.payFrequency,
      // FORMATEAR NEXT PAY DATE
      'Next Pay Date': formData.nextPayDate
        ? (formData.nextPayDate instanceof Date 
            ? formData.nextPayDate.toISOString().split('T')[0]
            : new Date(formData.nextPayDate).toISOString().split('T')[0])
        : '',
      'Employer Name': formData.employerName,
      'Payment Method': formData.paymentMethod, // CAMBIÉ DE paymentMethod a paycheckMethod
      'Account Type': formData.accountType,
      'Routing Number': formData.routingNumber,
      'Account Number': formData.accountNumber
    }
  };
  

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Airtable error response:", errorText);
      throw new Error(`Airtable error: ${errorText}`);
    }

    const result = await response.json();
    console.log("✅ Respuesta exitosa de Airtable:", result);
    return result;
  } catch (error) {
    console.error('❌ Error al enviar a Airtable:', error);
    throw error;
  }
}