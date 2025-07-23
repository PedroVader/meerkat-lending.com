// lib/api/airtable.ts

const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = 'appmwFMIFckGpGfbQ'; // Tu Base ID
const AIRTABLE_TABLE_NAME = 'Loan Applications'; // Nombre de tu tabla



export async function submitToAirtable(formData: any) {
  const airtableData = {
    fields: {
      'Loan Amount': formData.loanAmount,
      'Loan Purpose': formData.loanPurpose,
      'Loan Purpose Other': formData.loanPurposeOther || '',
      'Credit Score': formData.creditScore,
      'Email': formData.email,
      'Phone Number': formData.phone,
      'First Name': formData.firstName,
      'Last Name': formData.lastName,
      'Date of Birth': formData.dateOfBirth,
      'Zip Code': formData.zipCode,
      'Address': formData.address,
      'Income Type': formData.incomeType,
      'Monthly Income': formData.monthlyIncome,
      'SSN': formData.ssn,
      'Home Owner': formData.homeOwner,
      'Driver License': formData.driverLicense,
      'License State': formData.licenseState,
      'Pay Frequency': formData.payFrequency,
      'Next Pay Date': formData.nextPayDate,
      'Employer Name': formData.employerName,
      'Payment Method': formData.paymentMethod,
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
      const error = await response.json();
      throw new Error(`Airtable error: ${JSON.stringify(error)}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('❌ Error al enviar a Airtable:', error);
    throw error;
  }

  
}