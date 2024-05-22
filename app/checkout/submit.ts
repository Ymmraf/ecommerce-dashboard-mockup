'use server'

export async function submitForm(formData: FormData) {
    const rawFormData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
    };
    console.log(rawFormData)
  }