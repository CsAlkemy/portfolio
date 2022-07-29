import React from 'react'
import LogoDataCamp from '../../images/datacamp.png'
import LogoFreecodeCamp from '../../images/freecodecamp.png'

const CertificateCard = (props) => {
  const certificatesData = [
    {
      id:1,
      certificateOn:"Responsive Web Design",
      provider:"freecodecamp.org",
      issueDate:"2021",
      providerLogo:LogoFreecodeCamp
    },{
      id:2,
      certificateOn:"Web Scraping & Python",
      provider:"DataCamp.com",
      issueDate:"2022",
      providerLogo:LogoDataCamp
    }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-7 py-3 mx-3 md:mx-0'>
        {certificatesData.map((certificate) =>
            <div key={certificate.id} className='flex  gap-2 bg-white border-2 border-gray-100 dark:border-gray-900 dark:bg-black p-3 dark:text-white text-black rounded-lg relative transform duration-500 hover:-translate-y-1 hover:cursor-pointer'>
                <img src={certificate.providerLogo} alt={certificate.provider} className="h-20 w-20 object-cover rounded-lg" />
                <div>
                    <h1 className='text-base font-bold'>{certificate.certificateOn}</h1>
                    <p className='text-xs font-extralight dark:text-gray-300 text-gray-800' >{certificate.provider}</p>
                    <p className='text-xs font-bold text-emerald-500'>Issued on {certificate.issueDate}</p>
                    <button className="px-2 border-2 border-emerald-500 rounded-full flex flex-row justify-self-end text-xs hover:bg-emerald-500 hover:text-black">View</button>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default CertificateCard