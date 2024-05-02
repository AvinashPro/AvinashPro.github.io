let data = {
  
  main: [
    [1, "Dr.STONE", 2019, "May 2021", 59, "https://m.media-amazon.com/images/M/MV5BYmU2MzEyMjAtOTQ5Yy00NGMxLTg0NmItMTQ0ZTM5OGY0NjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"],
    [2, "Demon Slayer", 2019, "June 2022", 55, "https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"],
    [3, "Death Note", 2006, "July 2022", 37, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaCry5fwYr3VpBHurOBjBdlnH-Ek3r3B1kfp1I7TUpF_K2eZiPcl9y-s&s=10"],
    [4, "The Promised Neverland", 2019, "July 2022", 23, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAa0D-1FDsFvRq9qxqhkAUwxsEx4VjmNstI2XN_8HYuo1_nKeFJSoX-Ea&s=10"],
    [5, "Attack on Titan", 2013, "August 2022", 102, "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg"],
    [6, "Jujutsu Kaisen", 2020, "September 2022", 47, "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/jujutsu-kaisen.jpg"],
    [7, "Steins;Gate", 2011, "December 2022", 51, "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg"],
    ["M1", "Your Name", 2016, "04 March 2023", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN9olYk3kbQIGZki8vjX6OfJqv1rqit8t3Q&usqp=CAU"],
    [8, "One Punch Man", 2015, "March 2023", 36, "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"],
    [9, "A Bridge to the Starry Skies", 2011, "April 2023", 13, "https://m.media-amazon.com/images/M/MV5BY2ZkZjIxMjMtY2UxMC00YzRiLTlkNmMtMTYwNTdiMGFhYjVhXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_FMjpg_UX1000_.jpg"],
    [10, "Rent a Girlfriend", 2020, "May 2023", 36, "https://upload.wikimedia.org/wikipedia/en/1/12/Rent-A-Girlfriend_volume_1_cover.jpg"],
    ["M2", "Weathering With You", 2019, "14 June 2023", 6, "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg"],
    [11, "Love Flops", 2022, "June 2023", 12, "https://static.animecorner.me/2022/09/love-flops-kv.jpg"],
    [12, "A Couple of Cuckoos", 2022, "July 2023", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkY8Su3foiMLIHs9VK8I27bIZ16w-CJdY1Dkga_OKo4hzqDfzaNEVT32k&s=10"],
    [13, "Dororo", 2019, "August 2023", 24, "https://m.media-amazon.com/images/M/MV5BMTMwNmQyM2EtMDQ2My00Y2FhLWJlYTYtMDMwYWU4MzAwYmI3XkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_FMjpg_UX1000_.jpg"],
    [14, "The Girl I like forgot her glasses", 2023, "September 2023", 13, "https://m.media-amazon.com/images/M/MV5BMjkwZWUxNzctYjBlOC00OWFiLWIwNjAtODgxMWYzMTIzNzM4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"],
    [15, "The Angel next door spoils me rotten", 2023, "September 2023", 12, "https://m.media-amazon.com/images/M/MV5BMDAxM2Q1OTUtMjcwZS00MmE5LWE1ZDUtMmNkY2Y2ZGM4NTM1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [16, "Baki", 2018, "September 2023", 78, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mMuvVeQOSw3iaO11ZreP3z-I2T9MoXYt3yB-mL7Oxb6crH7vdmMG&s=10"],
    [17, "Tonikawa", 2020, "September 2023", 30, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5aByolrwKaYqfQ1bKpoDaEUlXaaY6_5qhkdESNJwz57y9ab2ixusJl0&s=10"],
    [18, "Eromanga Sensei", 2017, "September 2023", 14, "https://m.media-amazon.com/images/M/MV5BN2UwMWIyNDEtZGExOS00N2QwLWI4ZWUtMjk1NWRlMGVkZTE0XkEyXkFqcGdeQXVyNTI1MDU0MzM@._V1_FMjpg_UX1000_.jpg"],
    [19, "Kubo won't let me be invisible", 2023, "October 2023", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVopmstJi5Vj3w7G_s7_rgk__rnL6AT7CmGS7c4RrnoZVBpnX8Z_LlAGtQ&s=10"],
    [20, "Liar Liar", 2023, "October 2023",12, "https://www.nautiljon.com/images/anime/00/20/liar_liar_10202.webp"],
    [21, "Classroom of the Elite", 2017, "October 2023", 38, "https://m.media-amazon.com/images/M/MV5BMDM0MmVlOGItNDRjYi00MmE3LWExMjktMDc0YTYxYjAzYTE4XkEyXkFqcGdeQXVyNjc3NTI5MDY@._V1_FMjpg_UX1000_.jpg"],
    [22, "The Quintessential Quintuplets", 2019, "October 2023", 33, "https://m.media-amazon.com/images/M/MV5BYzU4YTdmYmYtNjVhYy00Njk1LWJmYjEtZmQ3MWNkZTMzYzNiXkEyXkFqcGdeQXVyNDAzNDkxNTU@._V1_.jpg"],
    [23, "Masamune-kun's Revenge", 2017, "October 2023", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRe_oW7_Kz_vq8P8qKNookiuTLq4oZLXH2Q&usqp=CAU"],
    [24, "The Dangers in my heart", 2023, "October 2023", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVHaT8m0Z-o-M_Zjn5tvJ56VMF1kOgbjr093u9CVnpsxMTMgueV9wKEkF&s=10"],
    [25, "Lookism", 2022, "October 2023", 8, "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23088641_b_v7_ac.jpg"],
    [26, "Heavenly Delusion", 2023, "November 2023", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpj-ARYrMKM-PG68kSSEt4QyEOGXFfQ2vtw&usqp=CAU"],
    [27, "Shikimori's not just a cutie", 2022, "November 2023", 12, "https://m.media-amazon.com/images/M/MV5BYjhkY2EyYjEtYjhlNS00ZmRiLWFmNjktNjJjNTJmYWQ2ZjMyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [28, "The dreaming boy is a realist", 2023, "November 2023", 12, "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRye0mjfz92Zwh3CE786KqL1aDs-MNhN4FVokONaIQbtkd7dQuz"],
    [29, "Girlfriend, Girlfriend", 2021, "November 2023", 12, "https://cdn.myanimelist.net/images/anime/1713/117119.jpg"],
    [30, "Oregairu", 2013, "November 2023", 41, "https://i0.wp.com/img1.ak.crunchyroll.com/i/spire2/320673efcacdbdb0d6222156f8d797ce1476015938_full.jpg"],
    [31, "Plastic Memories", 2015, "February 2024", 13, "https://m.media-amazon.com/images/M/MV5BZjBkYzY5OWEtMjE2MC00MWY3LTk0YTMtODQ4YjRlYTVlNjIxXkEyXkFqcGdeQXVyNTIxNDgzOTg@._V1_FMjpg_UX1000_.jpg"],
    [32, "Don't Toy with me, Miss Nagatoro", 2021, "February 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCssk5JH09bkCWaHDYjSpyS0R0p9EcIb-Ubg&usqp=CAU"],
    [33, "The Day I became a God", 2020, "February 2024", 12, "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/0bce41b36c2835bb3ab8f5ee1fac00fa.jpe"],
    [34, "Rascal Does Not Dream of Bunny Girl Senpai", 2018, "February 2024", 21, "https://m.media-amazon.com/images/I/81vuj1JYidL._AC_UF1000,1000_QL80_.jpg"],
    
    [35, "My love story with Yamada-kun at Lvl999", 2023, "March 2024", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL61UfnV6EVuqgye2BG9k7B4T9DaZhQPEQww&usqp=CAU"],
    [36, "Erased", 2016, "March 2024", 12, "https://m.media-amazon.com/images/M/MV5BYzJmZjZkMjQtZjJmZC00M2JkLTg5MzktN2FkOTllNTc5MmMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"],
    [37, "Our love has always been 10 centimeters apart", 2017, "March 2024", 6, "https://m.media-amazon.com/images/M/MV5BMDEzYTdlNDctYzZiYi00ZTNkLWI1MmItMjI4YWIwZTJhZTA4XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg"],
    [38, "Edens Zero", 2021, "March 2024", 50, "https://m.media-amazon.com/images/M/MV5BZDM2NjI5ODUtYWM4OC00Zjg2LWE5MzUtYThjYWFhOWQzN2M4XkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg"],
    [39, "Date a Live", 2013, "March 2024", 65, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLC87jm7GLxbXiQt47V5seLJmSmXHYErJgA&usqp=CAU"],
    [40, "Toradora", 2008, "April 2024", 27, "https://m.media-amazon.com/images/M/MV5BNWEwMjE2MjQtZTQ3NC00OTUxLWEwMWUtMThjZjg4Zjc5ZDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [41, "Insomniacs After School", 2023, "April 2024", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdy49oCmU2DIpEpOv5MlBCTZQyE_NqxME5Q&usqp=CAU"],
    [42, "The Daily Life of Immortal King", 2020, "April 2024", 51, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CPweVbDEx2CLv6FlBZyKHDeYUrhbHVBkY7tEX2K-m7_CtJEH855bt6Ab&s=10"],
    [43, "Your Lie in April", 2014, "April 2024", 23, "https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyNTM4NzAzNjc@._V1_FMjpg_UX1000_.jpg"],
    [44, "My Dress-Up Darling", 2022, "April 2024", 12, "https://m.media-amazon.com/images/I/91z5aNQoudL._AC_UF1000,1000_QL80_DpWeblab_.jpg"],
    [45, "Charlotte", 2015, "May 2024", 14, "https://m.media-amazon.com/images/M/MV5BNDYwNjdjYjktOWMyYS00NmNlLTgwYWItYzNjZGNmNjFjNDk2L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"],
    ["M3", "A Silent Voice", 2016, "02 May 2024", 6, "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/c78169bec692d5b9b9f3776df14d8428.jpe"],
    ["M4", "I Want to Eat Your Pancreas", 2018, "02 May 2024", 6, "https://miro.medium.com/v2/resize:fit:1400/0*-39YDA5ghsLXTO7X"]

  ],
  
  
  ecchi: [
    [1, "Why the hell are you here, teacher?", 2019, "April 2023", 6, "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoZ_czYMT9A32FKeF4w_rLuDFq9IpJGRxNAiu6LxJZVzatANFD"],
    [2, "To love ru", 2008, "April 2023", 81, "https://m.media-amazon.com/images/M/MV5BNmFkYjljODUtYTQyOS00N2U5LTk1NjktMDc1ZTVjMDhkNDAyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [3, "Sky of Connection", 2010, "April 2023", 12, "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Yosuganosora_package.jpg/220px-Yosuganosora_package.jpg"],
    [4, "Kiss x Sis", 2008, "May 2023", 12, "https://m.media-amazon.com/images/M/MV5BNjM4NmI4MDQtNjdlMS00YTBmLWFmZDgtYzdmYmQ2ZjVjYmZiXkEyXkFqcGdeQXVyMjc0MjUzMzU@._V1_FMjpg_UX1000_.jpg"],
    [5, "High school DxD", 2012, "May 2023", 55, "https://m.media-amazon.com/images/M/MV5BYjhlYWI2MGUtNjk4ZS00OWJjLWJiZTEtYWYxNTY5MzVhYzI0XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg"],
    [6, "Domestic Girlfriend", 2019, "June 2023", 12, "https://m.media-amazon.com/images/M/MV5BM2RmZmI2NmUtNDhjMi00MGQ4LWIyYTEtZmMxM2E1ZjBkYTU0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [7, "The Testament of Sister New Devil", 2015, "July 2023", 22, "https://m.media-amazon.com/images/M/MV5BZTZmNmY1MDMtNzM4OC00Nzc5LWE1ZmUtYjNmNDMwMGIyZjg5L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [8, "Mother of the Goddess' Dormitory", 2021, "July 2023", 10, "https://m.media-amazon.com/images/M/MV5BYWU3MTUwMzYtZDk3ZC00NTM4LTkzNWMtNGE2MmM1ZDRlZTJjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"],
    [9, "Okusama Ga Seitokaichou!", 2015, "October 2023", 8, "https://cdn.myanimelist.net/images/anime/12/75012.jpg"],
    [10, "Chained Soldier", 2024, "February 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9MqWnLJeudjBj1TD6ff-J_pSf3skX3G06wlospCnBmxNIhvK9kbb-7xZ&s=10"],
    [11, "The Comic Artist & his assistants", 2014, "February 2024", 9, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bjd3BPAp7U7yBBf7U9lKKL4baGjmslcVh1G8zJbfRqWTsH-s"],
    [12, "Tales of Wedding Rings", 2024, "March 2024", 12, "https://m.media-amazon.com/images/M/MV5BMDM0OGUwN2QtZWFiOS00NWMyLWI0ZDgtMjJlNDUxYTY2YjJhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"]


  ]
}


let movies = 4;