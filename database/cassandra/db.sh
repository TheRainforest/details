# run this in the shell to load up the DB
# replace relative path with absolute path at Col 206
cqlsh -k itemdetails -e \"COPY itemdetails.details (id, productName, producer, answeredQuestions, oneStars, twoStars, threeStars, fourStars, fiveStars, numberOfRatings, price, inStock, productInfo) from './CDdetailsSmall.csv' WITH DELIMITER = '|' AND HEADER = TRUE;\"
