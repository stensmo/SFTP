var documenterSearchIndex = {"docs":
[{"location":"reference/#SFTPClient.jl-Documentation","page":"SFTPClient.jl Documentation","title":"SFTPClient.jl Documentation","text":"","category":"section"},{"location":"reference/","page":"SFTPClient.jl Documentation","title":"SFTPClient.jl Documentation","text":"Modules = [SFTPClient]\nOrder   = [:function, :type]","category":"page"},{"location":"reference/#Base.Filesystem.cd-Tuple{SFTP, AbstractString}","page":"SFTPClient.jl Documentation","title":"Base.Filesystem.cd","text":"cd(sftp::SFTP, dir::AbstractString)\n\nChange the directory for the SFTP client.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.Filesystem.mkdir-Tuple{SFTP, AbstractString}","page":"SFTPClient.jl Documentation","title":"Base.Filesystem.mkdir","text":"mkdir(sftp::SFTP, dir::AbstractString)\n\nCreate a directory\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.Filesystem.mv-Tuple{SFTP, AbstractString, AbstractString}","page":"SFTPClient.jl Documentation","title":"Base.Filesystem.mv","text":"mv(     sftp::SFTP,     oldname::AbstractString,     newname::AbstractString; )\n\nMove, i.e., rename the file. \n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.Filesystem.readdir","page":"SFTPClient.jl Documentation","title":"Base.Filesystem.readdir","text":"readdir(sftp::SFTP, join::Bool = false, sort::Bool = true)\n\nReads the current directory. Returns a vector of Strings just like the regular readdir function.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.rm-Tuple{SFTP, AbstractString}","page":"SFTPClient.jl Documentation","title":"Base.Filesystem.rm","text":"rm(sftp::SFTP, file_name::AbstractString)\n\nRemove (delete) the file\n\n\n\n\n\n","category":"method"},{"location":"reference/#SFTPClient.download","page":"SFTPClient.jl Documentation","title":"SFTPClient.download","text":"SFTP.download(     sftp::SFTP,     file_name::AbstractString,      output = tempname();downloadDir::Union{String, Nothing}=nothing)\n\n Download a file. You can download it and use it directly, or save it to a file. \n Specify downloadDir if you want to save downloaded files. You can also use broadcasting.\nExample:\n\nsftp = SFTP(\"sftp://test.rebex.net/pub/example/\", \"demo\", \"password\")\nfiles=readdir(sftp)\ndownloadDir=\"/tmp\"\nSFTPClient.download.(sftp, files, downloadDir=downloadDir)\n\nYou can also use it like this:\ndf=DataFrame(CSV.File(SFTPClient.download(sftp, \"/mydir/test.csv\")))\n\n\n\n\n\n","category":"function"},{"location":"reference/#SFTPClient.rmdir-Tuple{SFTP, AbstractString}","page":"SFTPClient.jl Documentation","title":"SFTPClient.rmdir","text":"rmdir(sftp::SFTP, dir_name::AbstractString)\n\nRemove (delete) the directory\n\n\n\n\n\n","category":"method"},{"location":"reference/#SFTPClient.upload-Tuple{SFTP, AbstractString}","page":"SFTPClient.jl Documentation","title":"SFTPClient.upload","text":"upload(sftp::SFTP, file_name::AbstractString)\n\nUpload (put) a file to the server. Broadcasting can be used too. \n\nfiles=readdir() upload.(sftp,files)\n\n\n\n\n\n","category":"method"},{"location":"reference/#SFTPClient.SFTP-NTuple{4, AbstractString}","page":"SFTPClient.jl Documentation","title":"SFTPClient.SFTP","text":"function SFTP(url::AbstractString, username::AbstractString;disableverifypeer=false, disableverifyhost=false)\n\nCreates a new SFTP client using certificate authentication, and keys in the files specified\n\nsftp = SFTP(\"sftp://mysitewhereIhaveACertificate.com\", \"myuser\", \"test.pub\", \"test.pem\")\n\n\n\n\n\n","category":"method"},{"location":"reference/#SFTPClient.SFTP-Tuple{AbstractString, AbstractString, AbstractString}","page":"SFTPClient.jl Documentation","title":"SFTPClient.SFTP","text":"function SFTP(url::AbstractString, username::AbstractString, password::AbstractString;createknownhostsentry=true, disableverifypeer=false, disableverify_host=false)\n\nCreates a new SFTP Client: url: The url to connect to, e.g., sftp://mysite.com username: The username to use password: The users password createknownhosts_entry: Automatically create an entry in known hosts\n\nExample: sftp = SFTP(\"sftp://test.rebex.net\", \"demo\", \"password\")\n\n\n\n\n\n","category":"method"},{"location":"reference/#SFTPClient.SFTP-Tuple{AbstractString, AbstractString}","page":"SFTPClient.jl Documentation","title":"SFTPClient.SFTP","text":"function SFTP(url::AbstractString, username::AbstractString;disableverifypeer=false, disableverifyhost=false)\n\nCreates a new SFTP client using certificate authentication. \n\nsftp = SFTP(\"sftp://mysitewhereIhaveACertificate.com\", \"myuser\")\n\nNote! You must provide the username for this to work. \n\nBefore using this method, you must set up your certificates in ~/.ssh/idrsa and ~/.ssh/idrsa.pub\n\nOf course, the host need to be in the known_hosts file as well. \n\nTest using your local client first: ssh myuser@mysitewhereIhaveACertificate.com\n\nSee other method if you want to use files not in ~/ssh/\n\n\n\n\n\n","category":"method"},{"location":"#SFTPClient.jl","page":"SFTPClient.jl","title":"SFTPClient.jl","text":"","category":"section"},{"location":"","page":"SFTPClient.jl","title":"SFTPClient.jl","text":"An SFTP Client for Julia.","category":"page"},{"location":"","page":"SFTPClient.jl","title":"SFTPClient.jl","text":"A package for communicating with SFTP Servers, supporting username and password, or certificate authentication. ","category":"page"},{"location":"#SFTPClient.jl-Features","page":"SFTPClient.jl","title":"SFTPClient.jl Features","text":"","category":"section"},{"location":"","page":"SFTPClient.jl","title":"SFTPClient.jl","text":"- readdir\n- download\n- upload \n- cd\n- rm \n- rmdir\n- mkdir\n- mv","category":"page"}]
}
