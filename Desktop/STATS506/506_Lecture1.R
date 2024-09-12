# R recap

# assigning variables (R is object oreinted)
a <- 3
# can use = but do not interchange

# concatenate/vectors
c(2,5) # concatenates values together in a vector

# R is a weakly defined language
a <- 5
a <- 7 
a <- "str"

# Definitions
normaldistribution
normalDistribution #camel case
normal_distribution # snake case
normal.distribution #dot case; do not ever use because it has other meanings in R

q <- 4
Q <- 5
c(q,Q) # variables are case sensitive

# R copies values:
a <- 4
b <- a
a <- 5 # b is still 4 because b is not pointing to a in R, it is copying the value in a at the time of creation

ls() # listing all the objects I can see; global environment and what I am working with in this environment

rm(a) # remove things with this function; parenthesis imply function 

# *** inside functions when naming things use equals, when assigning things use <- ***

# assign and get functions
assign("str", "MyStr")
assign("str", 5)
# recycling

# sqrt is a vectorized output; if you input a vector in there it will pass it to each individual element; versus mean would create one number as the output; round is vectorized

# == is to check equality
sqrt(2)
sqrt(2)^2
# BUT
sqrt(2) ^ 2 == 2 # IS FALSE because sqrt 2 goes on for multiple decimals
# SO solution, use:
  all.equal() == TRUE
  
# Find packages in CRAN, github, and Bio conducter (rare); non cran packages use following documentation
  library(cluster) #has to be called every time u close and open  new r script; loads up the package; order matters when loading library
  install.packages("lme4") #must only install once per computer/user
  lme4:: # allows you to look inside the package to see what you need to access
