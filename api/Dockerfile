FROM microsoft/dotnet as temp

WORKDIR /dotnetapp

COPY . .
RUN dotnet restore

ENTRYPOINT ["dotnet", "run"]