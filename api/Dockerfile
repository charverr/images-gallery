#we use python base-image(python 3.12) and iside of it is python pre-installed
FROM python:3.12

#specify path to working directory inside of the container and it folder app
WORKDIR /app

#expose port that is launched in our application(5050)
EXPOSE 5050

#copy those two files to the image(./) to the WORKDIR
COPY Pipfile Pipfile.lock ./
RUN pip install Flask==3.0.2 Jinja2==3.1.3
#we install pipenv package
RUN pip install pipenv
#using pipenv we create txt file based on the files Pipfile Pipfile.lock and all dependencies of API are extracted to the requirments file
RUN pipenv requirements > requirements.txt
#using pip install all dependencies from requirements.txt
RUN pip install -r requirements.txt

#copy all the remaining folders from the api folder to WORKDIR
COPY . ./

#run main.py inside of the container
CMD ["python", "main.py"]