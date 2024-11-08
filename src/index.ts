function isimYaz(isim: string, tekrar: number): void {
    for (let i = 0; i < tekrar; i++){
        console.log(`${i+1}. satır: `,isim);
    }
}

isimYaz("ali", 50);