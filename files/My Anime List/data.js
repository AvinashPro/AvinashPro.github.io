let data = {
  
  /*
  0-Index   4-Episodes  7-Score
  1-Name    5-Cover     8-Favourite
  2-Aired   6-Genre     9-Masterpiece
  3-Watched
  */
  
  main: [
    [1, "Dr.STONE", 2019, "May 2021", 71, "https://picfiles.alphacoders.com/597/597667.jpeg", ["Sci-fi", "Adventure"], 10, true, true],
    [2, "Demon Slayer", 2019, "June 2022", 63, "https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", ["Action", "Supernatural"], 10, true, true],
    [3, "Death Note", 2006, "July 2022", 37, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaCry5fwYr3VpBHurOBjBdlnH-Ek3r3B1kfp1I7TUpF_K2eZiPcl9y-s&s=10", ["Thriller", "Psychological"], 10, true, true],
    [4, "The Promised Neverland", 2019, "July 2022", 23, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAa0D-1FDsFvRq9qxqhkAUwxsEx4VjmNstI2XN_8HYuo1_nKeFJSoX-Ea&s=10", ["Supernatural"], 7],
    [5, "Attack on Titan", 2013, "August 2022", 102, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfb582pKTYQCzIIuMJisxzQZ0O2OWW-eV5jpk0gwc9DOL09FJaI7Sn7L-&s=10", ["Action", "Drama"], 10, true, true],
    [6, "Jujutsu Kaisen", 2020, "September 2022", 47, "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/jujutsu-kaisen.jpg", ["Action", "Supernatural"], 8.8],
    [7, "Steins;Gate", 2011, "December 2022", 51, "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg", ["Sci-fi", "Drama", "Time travel", "Romance"], 10, true, true],
    ["M1", "Your Name", 2016, "04 March 2023", 5, "https://w0.peakpx.com/wallpaper/380/636/HD-wallpaper-your-name-anime-mitsuha-taki-your-name.jpg", ["Drama", "Romance"], 10, true, true],
    [8, "One Punch Man", 2015, "March 2023", 36, "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg", ["Action", "Comedy", "Supernatural"], 8.9],
    [9, "A Bridge to the Starry Skies", 2011, "April 2023", 13, "https://m.media-amazon.com/images/M/MV5BY2ZkZjIxMjMtY2UxMC00YzRiLTlkNmMtMTYwNTdiMGFhYjVhXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_FMjpg_UX1000_.jpg", ["School"], 6.5],
    [10, "Rent a Girlfriend", 2020, "May 2023", 36, "https://upload.wikimedia.org/wikipedia/en/1/12/Rent-A-Girlfriend_volume_1_cover.jpg", ["Harem"], 7.9],
    ["M2", "Weathering With You", 2019, "14 June 2023", 6, "https://w0.peakpx.com/wallpaper/316/99/HD-wallpaper-weathering-with-you-weathering-with-you-scenery.jpg", ["Drama", "Romance"], 10, true, true],
    [11, "Love Flops", 2022, "June 2023", 12, "https://static.animecorner.me/2022/09/love-flops-kv.jpg", ["Harem", "Romance", "Drama", "Emotional"], 10, true, true],
    [12, "A Couple of Cuckoos", 2022, "July 2023", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkY8Su3foiMLIHs9VK8I27bIZ16w-CJdY1Dkga_OKo4hzqDfzaNEVT32k&s=10", ["Rom-com"], 7.8],
    [13, "Dororo", 2019, "August 2023", 24, "https://m.media-amazon.com/images/M/MV5BMTMwNmQyM2EtMDQ2My00Y2FhLWJlYTYtMDMwYWU4MzAwYmI3XkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_FMjpg_UX1000_.jpg", ["Action", "Supernatural"], 8.8],
    [14, "The Girl I like forgot her glasses", 2023, "September 2023", 13, "https://m.media-amazon.com/images/M/MV5BMjkwZWUxNzctYjBlOC00OWFiLWIwNjAtODgxMWYzMTIzNzM4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", ["Rom-com", "School"], 9.8, true],
    [15, "The Angel next door spoils me rotten", 2023, "September 2023", 12, "https://m.media-amazon.com/images/M/MV5BMDAxM2Q1OTUtMjcwZS00MmE5LWE1ZDUtMmNkY2Y2ZGM4NTM1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Rom-com"], 8.1],
    [16, "Baki", 2018, "September 2023", 78, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mMuvVeQOSw3iaO11ZreP3z-I2T9MoXYt3yB-mL7Oxb6crH7vdmMG&s=10", ["Martial arts"], 7.4],
    [17, "Tonikawa", 2020, "September 2023", 30, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5aByolrwKaYqfQ1bKpoDaEUlXaaY6_5qhkdESNJwz57y9ab2ixusJl0&s=10", ["Rom-com", "Supernatural", "Comedy"], 8.9],
    [18, "Eromanga Sensei", 2017, "September 2023", 14, "https://m.media-amazon.com/images/M/MV5BN2UwMWIyNDEtZGExOS00N2QwLWI4ZWUtMjk1NWRlMGVkZTE0XkEyXkFqcGdeQXVyNTI1MDU0MzM@._V1_FMjpg_UX1000_.jpg", ["Rom-com"], 6.4],
    [19, "Kubo won't let me be invisible", 2023, "October 2023", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVopmstJi5Vj3w7G_s7_rgk__rnL6AT7CmGS7c4RrnoZVBpnX8Z_LlAGtQ&s=10", ["Rom-com", "School"], 7.4],
    [20, "Liar Liar", 2023, "October 2023",12, "https://www.nautiljon.com/images/anime/00/20/liar_liar_10202.webp", ["Psychological", "School"], 8.4],
    [21, "Classroom of the Elite", 2017, "October 2023", 38, "https://m.media-amazon.com/images/M/MV5BMDM0MmVlOGItNDRjYi00MmE3LWExMjktMDc0YTYxYjAzYTE4XkEyXkFqcGdeQXVyNjc3NTI5MDY@._V1_FMjpg_UX1000_.jpg", ["Psychological", "School", "Drama"], 8.3],
    [22, "The Quintessential Quintuplets", 2019, "October 2023", 33, "https://m.media-amazon.com/images/M/MV5BYzU4YTdmYmYtNjVhYy00Njk1LWJmYjEtZmQ3MWNkZTMzYzNiXkEyXkFqcGdeQXVyNDAzNDkxNTU@._V1_.jpg", ["Harem", "School", "Rom-com"], 7.8],
    [23, "Masamune-kun's Revenge", 2017, "October 2023", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRe_oW7_Kz_vq8P8qKNookiuTLq4oZLXH2Q&usqp=CAU", ["Drama", "Romance", "School"], 10, true, true],
    [24, "The Dangers in my heart", 2023, "October 2023", 26, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVHaT8m0Z-o-M_Zjn5tvJ56VMF1kOgbjr093u9CVnpsxMTMgueV9wKEkF&s=10", ["Rom-com", "School"], 8.4],
    [25, "Lookism", 2022, "October 2023", 8, "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23088641_b_v7_ac.jpg", ["Drama", "School", "Action"], 8.2],
    [26, "Heavenly Delusion", 2023, "November 2023", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpj-ARYrMKM-PG68kSSEt4QyEOGXFfQ2vtw&usqp=CAU", ["Post apocalyptic", "Supernatural", "Drama"], 9.3, true],
    [27, "Shikimori's not just a cutie", 2022, "November 2023", 12, "https://m.media-amazon.com/images/M/MV5BYjhkY2EyYjEtYjhlNS00ZmRiLWFmNjktNjJjNTJmYWQ2ZjMyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Rom-com", "School"], 7.5],
    [28, "The dreaming boy is a realist", 2023, "November 2023", 12, "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRye0mjfz92Zwh3CE786KqL1aDs-MNhN4FVokONaIQbtkd7dQuz", ["Rom-com", "School"], 7.4],
    [29, "Girlfriend, Girlfriend", 2021, "November 2023", 12, "https://cdn.myanimelist.net/images/anime/1713/117119.jpg", ["Harem", "Rom-com", "School"], 6.5],
    [30, "Oregairu", 2013, "November 2023", 41, "https://i0.wp.com/img1.ak.crunchyroll.com/i/spire2/320673efcacdbdb0d6222156f8d797ce1476015938_full.jpg", ["Drama", "Romance"], 9.5, true],
    [31, "Plastic Memories", 2015, "February 2024", 13, "https://m.media-amazon.com/images/M/MV5BZjBkYzY5OWEtMjE2MC00MWY3LTk0YTMtODQ4YjRlYTVlNjIxXkEyXkFqcGdeQXVyNTIxNDgzOTg@._V1_FMjpg_UX1000_.jpg", ["Drama", "Romance", "Emotional"], 10, true, true],
    [32, "Don't Toy with me, Miss Nagatoro", 2021, "February 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCssk5JH09bkCWaHDYjSpyS0R0p9EcIb-Ubg&usqp=CAU", ["Rom-com", "School"], 7],
    [33, "The Day I became a God", 2020, "February 2024", 12, "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/0bce41b36c2835bb3ab8f5ee1fac00fa.jpe", ["Drama", "Supernatural", "Romance", "Emotional"], 10, true, true],
    [34, "Rascal Does Not Dream of Bunny Girl Senpai", 2018, "February 2024", 21, "https://m.media-amazon.com/images/I/81vuj1JYidL._AC_UF1000,1000_QL80_.jpg", ["Psychological", "Supernatural", "School", "Drama", "Rom-com"], 8.7],
    
    [35, "My love story with Yamada-kun at Lvl999", 2023, "March 2024", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL61UfnV6EVuqgye2BG9k7B4T9DaZhQPEQww&usqp=CAU", ["Rom-com"], 5.1],
    [36, "Erased", 2016, "March 2024", 12, "https://m.media-amazon.com/images/M/MV5BYzJmZjZkMjQtZjJmZC00M2JkLTg5MzktN2FkOTllNTc5MmMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", ["Thriller", "Time travel", "Mystery"], 8],
    [37, "Our love has always been 10 centimeters apart", 2017, "March 2024", 6, "https://m.media-amazon.com/images/M/MV5BMDEzYTdlNDctYzZiYi00ZTNkLWI1MmItMjI4YWIwZTJhZTA4XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg", ["Rom-com", "School"], 4.5],
    [38, "Edens Zero", 2021, "March 2024", 50, "https://m.media-amazon.com/images/M/MV5BZDM2NjI5ODUtYWM4OC00Zjg2LWE5MzUtYThjYWFhOWQzN2M4XkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg", ["Supernatural", "Action"], 8.1],
    [39, "Date a Live", 2013, "March 2024", 65, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLC87jm7GLxbXiQt47V5seLJmSmXHYErJgA&usqp=CAU", ["Supernatural", "Rom-com", "Drama"], 5],
    [40, "Toradora", 2008, "April 2024", 27, "https://m.media-amazon.com/images/M/MV5BNWEwMjE2MjQtZTQ3NC00OTUxLWEwMWUtMThjZjg4Zjc5ZDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Romance", "Comedy", "Drama"], 8.7],
    [41, "Insomniacs After School", 2023, "April 2024", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdy49oCmU2DIpEpOv5MlBCTZQyE_NqxME5Q&usqp=CAU", ["Rom-com", "School"], 6],
    [42, "The Daily Life of Immortal King", 2020, "April 2024", 51, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CPweVbDEx2CLv6FlBZyKHDeYUrhbHVBkY7tEX2K-m7_CtJEH855bt6Ab&s=10", ["Rom-com"], 5.8],
    [43, "Your Lie in April", 2014, "April 2024", 23, "https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyNTM4NzAzNjc@._V1_FMjpg_UX1000_.jpg", ["Music", "Drama", "Romance"], 7],
    [44, "My Dress-Up Darling", 2022, "April 2024", 12, "https://m.media-amazon.com/images/I/91z5aNQoudL._AC_UF1000,1000_QL80_DpWeblab_.jpg", ["Rom-com", "School"], 7.2],
    [45, "Charlotte", 2015, "May 2024", 14, "https://m.media-amazon.com/images/M/MV5BNDYwNjdjYjktOWMyYS00NmNlLTgwYWItYzNjZGNmNjFjNDk2L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", ["Supernatural", "Romance", "Drama"], 9.6, true],
    ["M3", "A Silent Voice", 2016, "02 May 2024", 6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6arlgp-K49FLtI1P0eL7VInweUuTdkBgAdXcO6QHgfUDtePOdIXD2jV7z&s=10", ["Drama"], 10, true, true],
    ["M4", "I Want to Eat Your Pancreas", 2018, "02 May 2024", 6, "https://miro.medium.com/v2/resize:fit:1400/0*-39YDA5ghsLXTO7X", ["Drama"], 8],
    [46, "Angel Beats!", 2010, "May 2024", 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxx7O_Mr5oUz21_n-Ap6eW1MchcqZX5WG_liwv6WiTpkH8qjZq8R-zouF&s=10", ["Comedy", "School", "Psychological"], 7.7],
    [47, "Oreshura", 2013, "May 2024", 13, "https://m.media-amazon.com/images/M/MV5BODI3YzcxYzctODcwYS00MGI1LThhOGYtNjEzYTZmODJhMjMzXkEyXkFqcGdeQXVyNjc0ODMyMDc@._V1_.jpg", ["Harem", "School"], 1.2],
    [48, "Akashic Records of Bastard Magic Instructor", 2017, "May 2024", 12, "https://m.media-amazon.com/images/M/MV5BNGM3YWMxMzQtNmFiMS00NDczLWJkMjctODJjZWIwMmIwYzNiXkEyXkFqcGdeQXVyMjI5MjU5OTI@._V1_.jpg", ["Magic", "Fantasy"], 8],
    [49, "Anohana: The Flower We Saw That Day", 2011, "May 2024", 11, "https://m.media-amazon.com/images/M/MV5BNTc1NzEwOTU0MV5BMl5BanBnXkFtZTgwNTMxMzY5MDE@._V1_.jpg", ["Supernatural", "Emotional", "Drama"], 8.3],
    [50, "Mushoku Tensei", 2021, "May 2024", 49, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtVH-r28ww8YHNFExF7nu_vyiQ7W8QGhpf-qKH26wWCyajN4wkkWYngk&s=10", ["Isekai", "Drama", "Adventure"], 9.4],
    [51, "An Archdemon's Dilemma: How to Love Your Elf Bride", 2024, "May 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZH-gndJ82o828-52Jrha3gwOLZ56jdsDIyDCFWL9aZkisOwMrj4WuLrT&s=10", ["Magic", "Rom-com"], 7.2],
    [52, "Blue Spring Ride", 2014, "May 2024", 14, "https://m.media-amazon.com/images/M/MV5BYzBkOGIyMTMtZjViZC00NGY1LWFhMzItZGI2MmEwODIyYjVjXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg", ["Romance", "Slice of life"], 7],
    [53, "Chillin' in Another World With Level 2 Super Cheat Powers", 2024, "May 2024", 12, "https://m.media-amazon.com/images/M/MV5BZjlkOTQ5NTYtZDZiNC00ZTg2LTlhOTYtZjE2ODdlNDhkMjRjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", ["Isekai", "Rom-com"], 6.2],
    [54, "Re:Zero - Starting Life in Another World", 2016,"June 2024", 57, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Bf55-UOTZcTWU3NT6BLINZsEXTMCF8HNaA&usqp=CAU", ["Isekai", "Romance", "Drama", "Time travel", "Psychological"], 9.8, true],
    [55, "Golden Time", 2013, "June 2024", 24, "https://m.media-amazon.com/images/M/MV5BZTI0MDA5MWUtMWMyYS00NWM3LWE5ZmYtYTUxZmMxMGE5Y2IwXkEyXkFqcGdeQXVyNTIxNDgzOTg@._V1_.jpg", ["School", "Rom-com"], 7.3],
    [56, "Summer Time Rendering", 2022, "June 2024", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVC38-5y6J9YcCSjcRfz__YabhFK40kfRP5qSvvra62_bRDT7hH4hflN6&s=10", ["Mystery", "Supernatural", "Time travel"], 8],
    [57, "Btooom!", 2012, "July 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_KmhIgAFcJqtU0DciatZPZ88Y8VkUPBoiNc683R65ZRR_8-Yp4pwM6F2&s=10", ["Gore", "Action"], 6],
    [58, "Alya Sometimes Hides Her Feelings in Russian", 2024, "July 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-grXSjIjFX6I6sHLua_ZMhDUdX8cX70N5F5U72jVqSO4-C789gQwiTz0&s=10", ["Rom-com", "School"], 8],
    ["M5", "Suzume no Tojimari", 2022, "10 July 2024", 6, "https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg", ["Adventure", "Supernatural"], 8.1],
    ["M6", "The Tunnel to Summer, the Exit of Goodbyes", 2022, "12 July 2024", 4, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswosiyhFXZfnoUY2mdufcK3YsuFx_UwYWBOnk1AYD2AmKl1rVzwrvp1iD&s=10", ["Time travel", "Romance"], 7.6],
    ["M7", "Hello World", 2019, "12 July 2024", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFkfz0Ii8plf5DynUrlyx_vpT5FKKQBPZDw&usqp=CAU", ["Romance", "Drama", "Sci-fi"], 10, true, true],
    [59, "Mamahaha no Tsurego ga Motokano datta", 2022, "July 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnz2VzVtoRqY1UX23GVXBdBqfcenhmbEly9aS29q74Yg3UcmTGcE9YYI&s=10", ["Rom-com"], 6.5],
    [60, "DARLING in the FRANXX", 2018, "July 2024", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsty1igug9wke5ys_3igF9JMkosV-yKmGjkEfiH4ohgKS0Dlrdmf6yWgdL&s=10", ["Action", "Drama", "Romance"], 8.3],
    [61, "Chainsaw Man", 2022, "July 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BXc8DFi93_d10o_8de1hoewyrtiuMTn48N83yQbjHNisVnlesmYaz40r&s=10", ["Action", "Gore"], 8],
    [62, "Hell's Paradise", 2023, "August 2024", 13, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgqihjI1qMa2HCdV1sq-A2SzDcptOUOQSMHF3Vx6yB0LhWVorrgmjTIjE&s=10", ["Action", "Fantasy"], 8],
    [63, "Is It Wrong to Try to Pick Up Girls in a Dungeon?", 2015, "August 2024", 75, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJIxppfcRO1Ks1amcgB4W8TIXAq9KM7LY6VRSb4YkfuKd5HkVAh46xqJj&s=10", ["Action", "Adventure", "Fantasy"], 8],
    [64, "KonoSuba: God's Blessing on This Wonderful World!", 2016, "August 2024", 50, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4Qtx0VXqCeG6rcwXfcpYqERkTimNUkxJwCfd29Tzz73-EEC_IZ5HMgLX&s=10", ["Isekai", "Comedy", "Adventure", "Fantasy"], 8.8],
    [65, "The Rising of The Shield Hero", 2019, "August 2024", 50, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXeCCt4Z6DlRb1NHJhixR7pZ4BHKYJuAO4bU_s3B83enngSMRSyHc2uU&s=10", ["Isekai", "Adventure", "Action", "Fantasy", "Drama"], 8.3],
    [66, "WorldEnd: What do you do at the end of the world?", 2017, "September 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cALDN3X8_K288A402V5CaPTGL0tdhOqtIw&usqp=CAU", ["Romance", "Emotional", "Action", "Drama"], 8.5],
    ["M8", "To Me, the One Who Loved You", 2022, "14 September 2024", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysFULKPlz7yNOeuPB4-JOgD86q9KdOAiHEnunSOxgznaCsknQ096r234j&s=10", ["Sci-fi", "Drama", "Romance", "Supernatural"], 8.1],
    ["M9", "To Every You I've Loved Before", 2022, "14 September 2024", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuC62gQAafniYGr5fYK5aT_YToqVlbnDBU9qpjzmpgfhanjDOmUvQopoc&s=10", ["Sci-fi", "Drama", "Romance", "Supernatural"], 8],
    [67, "You and me", 2011, "September 2024", 26, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMY_KIOykBnMEXLJaR7zu0goH-2qF3ktYjQ&usqp=CAU", ["slice of life", "Comedy", "School"], 8.1],
    ["M10", "Josee, the Tiger and the Fish", 2020, "19 September 2024", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-mF-8YY3Igt0XPJhw45kkES51uL_-0o180G_AUAeOLnzEPz9smXqJ2fE&s=10", ["Drama"], 7.9],
    
    [68, "Our Last Crusade or the Rise of a New World", 2020, "September 2024", 24, "https://m.media-amazon.com/images/M/MV5BOWY4OTRmM2EtOGE0Ny00MThjLTlkMWItOGMzMjcwMDc4MzlhXkEyXkFqcGc@._V1_.jpg", ["Action", "Rom-com", "Fantasy"], 6.2],
    [69, "That Time I Got Reincarnated as a Slime", 2018, "October 2024", 98, "https://m.media-amazon.com/images/M/MV5BOTczMjM3MDUtYmZjMC00YzZhLWE4ODQtNjg5YWU4NTJjNzY2XkEyXkFqcGc@._V1_.jpg", ["Isekai", "Comedy", "Fantasy"], 7.4],
    [70, "My Little Monster", 2012, "October 2024", 13, "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a58f555e8c6bff2e299e01650524a347.jpe", ["Rom-com", "School"], 7],
    [71, "Bungo Stray Dogs", 2016, "November 2024", 64, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-RfGsjFQJVQW9I1eEynERagYlJltKJqHAfdKerv-bcEpvLXOCZTKAkH&s=10", ["Action", "Supernatural"], 7.6],
    ["M11", "5 Centimeters per Second", 2007, "19 December 2024", 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD40Nfs7gSlUxsMp_LGs3aGyxGhhFIj6IrbVVr83V2arW24S2OXDcIKtI&s=10", ["Drama"], 5],
    [72, "Dandadan", 2024, "December 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtT0RQdo3kTAL9yTUrLj0EYPzByLzUuaV0g&usqp=CAU", ["Action", "Comedy", "School", "Supernatural"], 7.4],
    [73, "Spirit Chronicles", 2021, "December 2024", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisQihdbRHUsgEojHfKTADPZ87GsRbswb4byK0NOw0n28pMEGyN4emvKQ&s=10", ["Isekai", "Action", "Adventure", "Harem", "Fantasy", "Magic"], 8.9]

  ],
  
  
  ecchi: [
    [1, "Why the hell are you here, teacher?", 2019, "April 2023", 6, "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoZ_czYMT9A32FKeF4w_rLuDFq9IpJGRxNAiu6LxJZVzatANFD", ["Comedy", "School"], 7],
    [2, "To love ru", 2008, "April 2023", 81, "https://m.media-amazon.com/images/M/MV5BNmFkYjljODUtYTQyOS00N2U5LTk1NjktMDc1ZTVjMDhkNDAyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Comedy", "School", "Supernatural", "Harem"], 8.7],
    [3, "Sky of Connection", 2010, "April 2023", 12, "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Yosuganosora_package.jpg/220px-Yosuganosora_package.jpg", ["Drama", "Romance"], 8],
    [4, "Kiss x Sis", 2008, "May 2023", 12, "https://m.media-amazon.com/images/M/MV5BNjM4NmI4MDQtNjdlMS00YTBmLWFmZDgtYzdmYmQ2ZjVjYmZiXkEyXkFqcGdeQXVyMjc0MjUzMzU@._V1_FMjpg_UX1000_.jpg", ["school", "Comedy", "Harem"], 5.2],
    [5, "High school DxD", 2012, "May 2023", 55, "https://m.media-amazon.com/images/M/MV5BYjhlYWI2MGUtNjk4ZS00OWJjLWJiZTEtYWYxNTY5MzVhYzI0XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg", ["Action", "Magic", "School", "Comedy", "Supernatural", "Harem"], 9],
    [6, "Domestic Girlfriend", 2019, "June 2023", 12, "https://m.media-amazon.com/images/M/MV5BM2RmZmI2NmUtNDhjMi00MGQ4LWIyYTEtZmMxM2E1ZjBkYTU0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Drama", "School", "Harem"], 4.2],
    [7, "The Testament of Sister New Devil", 2015, "July 2023", 22, "https://m.media-amazon.com/images/M/MV5BZTZmNmY1MDMtNzM4OC00Nzc5LWE1ZmUtYjNmNDMwMGIyZjg5L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Magic", "Supernatural", "Harem", "Action"], 5.5],
    [8, "Mother of the Goddess' Dormitory", 2021, "July 2023", 10, "https://m.media-amazon.com/images/M/MV5BYWU3MTUwMzYtZDk3ZC00NTM4LTkzNWMtNGE2MmM1ZDRlZTJjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Comedy"], 8.2],
    [9, "Okusama Ga Seitokaichou!", 2015, "October 2023", 8, "https://cdn.myanimelist.net/images/anime/12/75012.jpg", ["School", "Rom-com", "Comedy"], 6.2],
    [10, "Chained Soldier", 2024, "February 2024", 12, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9MqWnLJeudjBj1TD6ff-J_pSf3skX3G06wlospCnBmxNIhvK9kbb-7xZ&s=10", ["Harem", "Action", "Supernatural"], 7.2],
    [11, "The Comic Artist & his assistants", 2014, "February 2024", 9, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bjd3BPAp7U7yBBf7U9lKKL4baGjmslcVh1G8zJbfRqWTsH-s", ["Comedy"], 6.2],
    [12, "Tales of Wedding Rings", 2024, "March 2024", 12, "https://m.media-amazon.com/images/M/MV5BMDM0OGUwN2QtZWFiOS00NWMyLWI0ZDgtMjJlNDUxYTY2YjJhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", ["Action", "Magic", "Isekai", "Fantasy", "Harem"], 8],
    [13, "Elfen Lied", 2004, "June 2024", 14, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlVI_2Lll-0qQaWZNdhRGV6ZuFljGQar6XYNhRV0IKtvuWWan3ZXpQu1v&s=10", ["Gore", "Action", "Psychological"], 7.8]


  ]
}

