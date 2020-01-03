const companies = new Set()
console.log('Size ', companies.size)
companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log('companies', companies)
companies.add('Infosys')
console.log('companies ', companies)
console.log('size ', companies.size)
companies.delete('Infosys')
console.log('companies', companies)
companies.delete('Google')
console.log('size ', companies.size)
console.log(companies.has('Google'))
console.log(companies.has('Facebook'))
companies.clear()
console.log('companies ', companies)
const languages = ['English','Finnish','English','French','Spanish','English','French']
const langSet = new Set(languages)
console.log('langSet ', langSet)
console.log('size of langset ', langSet.size)
const counts = []
const count = []
for (const lang of langSet) {
    const filteredLang = languages.filter(langs => langs ===lang)
    console.log('filteredLang ', filteredLang)
    counts.push({lang: lang, count : filteredLang.length})
    console.log(counts)
}
console.log('counts ', counts)
const countriesMap = new Map()
countriesMap.set('Finland','Helsinki')
countriesMap.set('Estonia','Tallinn')
countriesMap.set('Sweden','Stockholm')
console.log('countriesMap ', countriesMap)
console.log('size of countriesMap ', countriesMap.size)
console.log(countriesMap.get('Finland'))
console.log(countriesMap.has('Finland'))
for (const countryMap of countriesMap) {
    console.log('Country Map', countryMap)
    
}
console.log(countriesMap.keys())
    console.log(countriesMap.values())