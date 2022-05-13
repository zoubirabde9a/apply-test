
export function testAbsolute(linkUrl : String) : boolean {

    var result = true;

    if (linkUrl.indexOf('http://') === 0 ||
    linkUrl.indexOf('https://') === 0 ||
    linkUrl.indexOf('www.') === 0)
    {
        result = true;
    }
    else 
    {
        result = false;
    }

    return result;
}


export function removeBlank(str : String) : String {

    var newString : String;

    newString = "";
    var nbOfSpace = 0;
    for(var i = 0; i < str.length; i++)
    {
        if (str[i] == ' ')
        {
            nbOfSpace++;
        }
        else
        {
            nbOfSpace = 0;
        }

        if (nbOfSpace <= 1)
        {
            newString += str[i];
        }
    }

    return newString;
}
