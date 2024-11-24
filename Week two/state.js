let stateandcapital = new Map([
['Abia', 'Umuahia'],	
['Adamawa', 'Yola'],
['Awka-ibom', 'Uyo'],
['Anambra', 'Awka'],
['Bauchi', 'Bauchi'],	
['Bayelsa', 'Yenagoa'],
['Benue', 'Makurdi'],
['Borno',	'Maiduguri'],
['Cross-River', 'Calabar'],
['Delta',	'Asaba'],
['Ebonyi',	'Abakaliki'],
['Edo', 'Benin City'],
['Ekiti',	'Ado-Ekiti'],
['Enugu',	'Enugu'],
['Gombe',	'Gombe'],
['Imo', 'Owerri'],
['Jigawa', 'Dutse'],
['Kaduna', 'Kaduna'],
['Kano',	'Kano'],
['Katsina', 'Katsina'],
['Kebbi', 'Birnin-Kebbi'],
['Kogi', 'Lokoja'],
['Kwara', 'Ilorin'],
['Lagos', 'Ikeja'],
['Nasarawa', 'Lafia'],
['Niger', 'Minna'],
['Ogun', 'Abeokuta'],
['Ondo',	'Akure'],
['Osun',	'Oshogbo'],
['Oyo', 'Ibadan'],
['Plateau', 'Jos'],
['Rivers', 'Port Harcourt'],
['Sokoto', 'Sokoto'],
['Taraba', 'Jalingo'],
['Yobe', 'Damaturu'],
['Zamfara',	'Gusau'],
['Federal Capital Territory (FCT)',	'Abuja']
]);
console.log("Nigeria states and capitals");
stateandcapital.forEach((capital, state) =>
{
    console.log(state + "-"+ capital)
});