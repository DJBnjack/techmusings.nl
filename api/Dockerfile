FROM microsoft/dotnet as temp

WORKDIR /dotnetapp

# copy project.json and restore as distinct layers
COPY techmusings-api.csproj .
RUN dotnet restore

# copy and build everything else
COPY . .
RUN dotnet publish -c Release -o out

# Use a different layer for the final runtime image
FROM microsoft/dotnet:runtime as final
WORKDIR /dotnetapp
COPY --from=temp /dotnetapp/out .
ENTRYPOINT ["dotnet", "techmusings-api.dll"]